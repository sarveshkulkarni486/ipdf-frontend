export const createPdfPayload = (pdfData) => {

    const documentData =
        pdfData.document || {};

    const contentData =
        pdfData.content || {};


    return {

        // ==========================================
        // DOCUMENT
        // ==========================================

        title:
            documentData.title || "",

        documentNumber:
            documentData.documentNumber || "",

        documentDate:
            documentData.documentDate || "",


        // ==========================================
        // COMPANY
        // ==========================================

        companyName:
            documentData.companyName || "",

        companyAddress:
            documentData.companyAddress || "",

        companyEmail:
            documentData.companyEmail || "",

        companyPhone:
            documentData.companyPhone || "",


        // ==========================================
        // CUSTOMER
        // ==========================================

        customerName:
            contentData.customerName || "",

        customerEmail:
            contentData.customerEmail || "",

        customerAddress:
            contentData.customerAddress || "",


        // ==========================================
        // TABLE
        // ==========================================

        columns:
            contentData.columns || [],

        rows:
            contentData.rows || [],


        // ==========================================
        // FOOTER
        // ==========================================

        footer:
            contentData.footer || ""

    };

};