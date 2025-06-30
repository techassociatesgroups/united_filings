
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User, Mail, Phone, Calendar, Edit } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) {
        navigate('/auth');
        return;
      }
      
      setUser(session.user);
      setFormData({
        name: session.user.user_metadata?.name || '',
        mobile: session.user.user_metadata?.mobile || '',
      });
      setLoading(false);
    };

    checkAuth();
  }, [navigate]);

  const handleSave = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        data: {
          name: formData.name,
          mobile: formData.mobile,
        }
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Profile updated successfully",
      });
      setEditing(false);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  const userInitial = user?.email?.charAt(0).toUpperCase() || 'U';

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="bg-blue-600 text-white text-2xl">
                    {userInitial}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-2xl text-blue-600">My Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <User className="inline h-4 w-4 mr-1" />
                    Name
                  </label>
                  {editing ? (
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                    />
                  ) : (
                    <div className="p-2 bg-gray-50 rounded-md">
                      {formData.name || 'Not provided'}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Mail className="inline h-4 w-4 mr-1" />
                    Email
                  </label>
                  <div className="p-2 bg-gray-50 rounded-md text-gray-600">
                    {user?.email}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Phone className="inline h-4 w-4 mr-1" />
                    Mobile
                  </label>
                  {editing ? (
                    <Input
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="Enter your mobile number"
                    />
                  ) : (
                    <div className="p-2 bg-gray-50 rounded-md">
                      {formData.mobile || 'Not provided'}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Joined
                  </label>
                  <div className="p-2 bg-gray-50 rounded-md text-gray-600">
                    {new Date(user?.created_at).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                {editing ? (
                  <div className="space-x-2">
                    <Button onClick={handleSave} disabled={loading}>
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={() => setEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => setEditing(true)}>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                )}
                
                <Button variant="destructive" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
