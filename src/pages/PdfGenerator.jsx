import { useState } from "react";

import Header from "../components/Header";
import Stepper from "../components/Stepper";

import DocumentForm from "../components/DocumentForm";
import ContentForm from "../components/ContentForm";
import DesignForm from "../components/DesignForm";
import Preview from "../components/Preview";
import { createPdfPayload } from "../services/pdfPayload";
import { generatedPDF } from "../services/pdfService";


function PdfGenerator() {

    // =====================================================
    // CURRENT STEP
    // =====================================================

    const [currentStep, setCurrentStep] = useState(1);


    // =====================================================
    // COMPLETE PDF DATA
    // =====================================================

    const [pdfData, setPdfData] = useState({

        document: {},

        content: {},

        design: {}

    });


    // =====================================================
    // STEP 1
    // DOCUMENT → CONTENT
    // =====================================================

    const handleDocumentNext = (data) => {

        setPdfData((previousData) => ({

            ...previousData,

            document: data

        }));

        setCurrentStep(2);
    };


    // =====================================================
    // STEP 2
    // CONTENT → DESIGN
    // =====================================================

    const handleContentNext = (data) => {

        setPdfData((previousData) => ({

            ...previousData,

            content: data

        }));

        setCurrentStep(3);
    };


    // =====================================================
    // STEP 2
    // CONTENT → DOCUMENT
    // =====================================================

    const handleContentBack = () => {

        setCurrentStep(1);

    };


    // =====================================================
    // STEP 3
    // DESIGN → PREVIEW
    // =====================================================

    const handleDesignNext = (data) => {

        setPdfData((previousData) => {

            const updatedData = {

                ...previousData,

                design: data

            };


            console.log(
                "Complete PDF Data:",
                updatedData
            );


            return updatedData;

        });

        setCurrentStep(4);
    };


    // =====================================================
    // STEP 3
    // DESIGN → CONTENT
    // =====================================================

    const handleDesignBack = () => {

        setCurrentStep(2);

    };


    // =====================================================
    // STEP 4
    // PREVIEW → DESIGN
    // =====================================================

    const handlePreviewBack = () => {

        setCurrentStep(3);

    };


    // =====================================================
    // GENERATE PDF
    // =====================================================

    const handleGeneratePdf = async () => {
        try {
            console.log("Complete frontend data:", pdfData);

            const payload = createPdfPayload(pdfData);

            console.log("Sending payload to backend:", payload);

            const response = await generatedPDF(payload);

            console.log("PDF generated successfully");

            const blob = new Blob([response.data], 
                {
                    type: "application/pdf" 
                }
            );
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");

            link.href = url;
            link.download = `${payload.title || "document"}.pdf`;

            document.body.appendChild(link);

            link.click();

            link.remove();

            window.URL.revokeObjectURL(url);

        }catch(error){
            console.error("PDF generation failed", error);
            if(error.response) {
                console.error("Backend response:", error.response.data);
            }
            alert("Unable to generate PDF. Please try again");
        }
    };


    // =====================================================
    // RENDER
    // =====================================================

    return (

        <div className="pdf-generator-page">


            {/* =================================================
                APPLICATION HEADER
            ================================================= */}

            <Header />


            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <main className="main-content">


                {/* =================================================
                    STEPPER
                ================================================= */}

                <Stepper
                    currentStep={currentStep}
                />


                {/* =================================================
                    FORM / PREVIEW CARD
                ================================================= */}

                <section className="form-card">


                    {/* =================================================
                        COMMON PAGE TITLE
                    ================================================= */}

                    {currentStep !== 4 && (

                        <>
                            <h1>
                                Create Your PDF
                            </h1>

                            <p className="form-description">
                                Create a professional PDF document
                                by providing your document details.
                            </p>
                        </>

                    )}


                    {/* =================================================
                        STEP 1 — DOCUMENT
                    ================================================= */}

                    {currentStep === 1 && (

                        <DocumentForm
                            onNext={handleDocumentNext}
                        />

                    )}


                    {/* =================================================
                        STEP 2 — CONTENT
                    ================================================= */}

                    {currentStep === 2 && (

                        <ContentForm
                            initialData={pdfData.content}
                            onNext={handleContentNext}
                            onBack={handleContentBack}
                        />

                    )}


                    {/* =================================================
                        STEP 3 — DESIGN
                    ================================================= */}

                    {currentStep === 3 && (

                        <DesignForm
                            initialData={pdfData.design}
                            onNext={handleDesignNext}
                            onBack={handleDesignBack}
                        />

                    )}


                    {/* =================================================
                        STEP 4 — PREVIEW
                    ================================================= */}

                    {currentStep === 4 && (

                        <Preview
                            pdfData={pdfData}
                            onBack={handlePreviewBack}
                            onGenerate={handleGeneratePdf}
                        />

                    )}

                </section>

            </main>

        </div>

    );
}


export default PdfGenerator;