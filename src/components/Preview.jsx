import { useEffect, useState } from "react";


function Preview({ pdfData, onBack, onGenerate }) {

    const [logoUrl, setLogoUrl] = useState(null);


    // =====================================================
    // LOGO PREVIEW
    // =====================================================

    useEffect(() => {

        const logo = pdfData?.design?.logo;

        if (!logo) {
            setLogoUrl(null);
            return;
        }

        const url = URL.createObjectURL(logo);

        setLogoUrl(url);


        return () => {
            URL.revokeObjectURL(url);
        };

    }, [pdfData?.design?.logo]);


    // =====================================================
    // DATA
    // =====================================================

    const documentData =
        pdfData?.document || {};

    const contentData =
        pdfData?.content || {};

    const designData =
        pdfData?.design || {};


    const columns =
        contentData.columns || [];

    const rows =
        contentData.rows || [];


    const themeColor =
        designData.themeColor || "#4F46D8";


    // =====================================================
    // RENDER
    // =====================================================

    return (

        <div className="preview-page">


            {/* =================================================
                PREVIEW HEADER
            ================================================= */}

            <div className="preview-heading">

                <div>

                    <h2>
                        Preview
                    </h2>

                    <p>
                        Review your document before generating
                        the final PDF.
                    </p>

                </div>

            </div>


            {/* =================================================
                A4 PREVIEW
            ================================================= */}

            <div className="preview-container">

                <div
                    className={`pdf-paper ${designData.orientation === "LANDSCAPE"
                        ? "landscape"
                        : ""
                    }`}
                    style={{
                        "--theme-color": themeColor
                    }}
                >


                    {/* =================================================
                        PDF HEADER
                    ================================================= */}

                    <div className="pdf-header">


                        {/* COMPANY */}

                        <div className="pdf-company">

                            {designData.showLogo && logoUrl && (

                                <img
                                    src={logoUrl}
                                    alt="Company Logo"
                                    className="pdf-logo"
                                />

                            )}


                            <div>

                                <h3>
                                    {documentData.companyName ||
                                        "Company Name"}
                                </h3>

                                <p>
                                    {documentData.companyAddress ||
                                        "Company Address"}
                                </p>

                                <p>

                                    {documentData.companyEmail ||
                                        "company@example.com"}

                                    {" • "}

                                    {documentData.companyPhone ||
                                        "+91 0000000000"}

                                </p>

                            </div>

                        </div>


                        {/* DOCUMENT INFORMATION */}

                        <div className="pdf-document-info">

                            <h1>
                                {documentData.title ||
                                    "Document Title"}
                            </h1>

                            <p>
                                Document No:
                                {" "}
                                {documentData.documentNumber ||
                                    "DOC-001"}
                            </p>

                            <p>
                                Date:
                                {" "}
                                {documentData.documentDate ||
                                    "DD-MM-YYYY"}
                            </p>

                        </div>

                    </div>


                    {/* =================================================
                        HEADER LINE
                    ================================================= */}

                    <div
                        className="pdf-theme-line"
                        style={{
                            backgroundColor: themeColor
                        }}
                    />


                    {/* =================================================
                        CUSTOMER DETAILS
                    ================================================= */}

                    <section className="pdf-section">

                        <h4
                            style={{
                                color: themeColor
                            }}
                        >
                            CUSTOMER DETAILS
                        </h4>


                        <div className="customer-box">

                            <div>

                                <span>
                                    Customer Name
                                </span>

                                <strong>
                                    {contentData.customerName ||
                                        "Customer Name"}
                                </strong>

                            </div>


                            <div>

                                <span>
                                    Email
                                </span>

                                <strong>
                                    {contentData.customerEmail ||
                                        "customer@example.com"}
                                </strong>

                            </div>


                            <div>

                                <span>
                                    Phone
                                </span>

                                <strong>
                                    {contentData.customerPhone ||
                                        "+91 0000000000"}
                                </strong>

                            </div>


                            <div>

                                <span>
                                    Address
                                </span>

                                <strong>
                                    {contentData.customerAddress ||
                                        "Customer Address"}
                                </strong>

                            </div>

                        </div>

                    </section>


                    {/* =================================================
                        DATA TABLE
                    ================================================= */}

                    <section className="pdf-section">

                        <h4
                            style={{
                                color: themeColor
                            }}
                        >
                            DOCUMENT DETAILS
                        </h4>


                        {columns.length > 0 ? (

                            <div className="pdf-table-wrapper">

                                <table className="pdf-table">

                                    <thead>

                                        <tr>

                                            {columns.map(
                                                (column, index) => (

                                                    <th
                                                        key={index}
                                                        style={{
                                                            backgroundColor:
                                                                themeColor
                                                        }}
                                                    >
                                                        {column}
                                                    </th>

                                                )
                                            )}

                                        </tr>

                                    </thead>


                                    <tbody>

                                        {rows.length > 0 ? (

                                            rows.map(
                                                (row, rowIndex) => (

                                                    <tr key={rowIndex}>

                                                        {columns.map(
                                                            (_, columnIndex) => (

                                                                <td
                                                                    key={columnIndex}
                                                                >

                                                                    {row[columnIndex] ||
                                                                        ""}

                                                                </td>

                                                            )
                                                        )}

                                                    </tr>

                                                )
                                            )

                                        ) : (

                                            <tr>

                                                <td
                                                    colSpan={columns.length}
                                                    className="empty-table"
                                                >
                                                    No data available
                                                </td>

                                            </tr>

                                        )}

                                    </tbody>

                                </table>

                            </div>

                        ) : (

                            <div className="empty-preview">

                                No table data has been added.

                            </div>

                        )}

                    </section>


                    {/* =================================================
                        SUMMARY
                    ================================================= */}

                    {contentData.summary &&
                        Object.keys(contentData.summary).length > 0 && (

                            <section className="pdf-summary">

                                <h4
                                    style={{
                                        color: themeColor
                                    }}
                                >
                                    SUMMARY
                                </h4>


                                <div className="summary-box">

                                    {Object.entries(
                                        contentData.summary
                                    ).map(
                                        ([label, value]) => (

                                            <div
                                                className="summary-row"
                                                key={label}
                                            >

                                                <span>
                                                    {label}
                                                </span>

                                                <strong>
                                                    {value}
                                                </strong>

                                            </div>

                                        )
                                    )}

                                </div>

                            </section>

                        )}


                    {/* =================================================
                        NOTES
                    ================================================= */}

                    {contentData.notes && (

                        <section className="pdf-notes">

                            <h4
                                style={{
                                    color: themeColor
                                }}
                            >
                                NOTES
                            </h4>

                            <p>
                                {contentData.notes}
                            </p>

                        </section>

                    )}


                    {/* =================================================
                        FOOTER
                    ================================================= */}

                    {designData.showFooter && (

                        <div className="pdf-footer">

                            <span>
                                {contentData.footer ||
                                    "This is a system generated document."}
                            </span>

                            {designData.showPageNumbers && (

                                <span>
                                    Page 1
                                </span>

                            )}

                        </div>

                    )}

                </div>

            </div>


            {/* =================================================
                ACTION BUTTONS
            ================================================= */}

            <div className="preview-actions">


                <button
                    type="button"
                    className="back-button"
                    onClick={onBack}
                >
                    ← Back
                </button>


                <button
                    type="button"
                    className="primary-button generate-button"
                    onClick={onGenerate}
                >
                    Generate PDF
                    <span>→</span>
                </button>

            </div>

        </div>
    );
}


export default Preview;