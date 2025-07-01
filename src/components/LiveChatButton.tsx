
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { handlePhoneCall, businessPhone } from "@/utils/contactUtils";

const LiveChatButton = () => {
  const handleLiveChat = () => {
    // For now, we'll redirect to phone call - you can integrate actual live chat service later
    handlePhoneCall(businessPhone);
  };

  return (
    <Button 
      onClick={handleLiveChat}
      className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg"
    >
      <MessageCircle className="w-4 h-4" />
      Live Chat with Experts
    </Button>
  );
};

export default LiveChatButton;
