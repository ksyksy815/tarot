import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { RefObject } from "react";

const usePDFGenerator = () => {
  const generatePDF = (resultRef: RefObject<HTMLDivElement>) => {
    if (resultRef.current === null) return;

    const input = resultRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const padding = 10;
      const imgWidth = pageWidth - 2 * padding; // Calculate image width with padding
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate image height to maintain aspect ratio

      let heightLeft = imgHeight;
      let position = 0;

      // Calculate the x position to center the content
      const xPosition = (pageWidth - imgWidth) / 2;

      // Add website name and URL
      // const websiteName = "AICana | AI Tarot Card Reader";
      // const websiteURL = "https://aicana.vercel.app";

      // Set font size to 11 points
      // pdf.setFontSize(11);
      // pdf.setFont("helvetica");

      // Add the website text at the bottom of the first page
      // pdf.text(websiteName, pageWidth / 2, pageHeight - 10, {
      //   align: "center",
      // });
      // pdf.text(websiteURL, pageWidth / 2, pageHeight - 5, { align: "center" });

      // Add the image content
      pdf.addImage(imgData, "PNG", xPosition, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();

        // Add the website text at the bottom of each subsequent page
        // pdf.text(websiteName, 0, pageHeight - 10, {
        //   align: "left",
        // });
        // pdf.text(websiteURL, 0, pageHeight - 5, {
        //   align: "left",
        // });

        pdf.addImage(imgData, "PNG", xPosition, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      const currentDate = new Date().toLocaleDateString();
      pdf.save(`tarot_result_${currentDate}.pdf`);
    });
  };

  return {
    generatePDF,
  };
};

export default usePDFGenerator;
