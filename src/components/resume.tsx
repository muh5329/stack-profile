import { Button } from "~/components/ui/button";
import { Download } from "lucide-react";

export default function ResumeButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Change this to your file URL
    link.download = "My_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleDownload}>
      Resume <Download />
    </Button>
  );
}