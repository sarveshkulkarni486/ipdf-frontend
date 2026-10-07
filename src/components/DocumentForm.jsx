import { useState } from "react";
function DocumentForm({ onNext }){
    const [formData, setFormData] = useState({
        title: "",
        documentNumber: "",
        documentDate: "",
        companyName: "",
        companyAddress: "",
        companyEmail: "",
        companyPhone: ""
    });
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onNext(formData);
    };

    return (
        <form className="document-form" onSubmit={handleSubmit}
        >
            <div className="form-section">
                <h2 className="section-title">
                    Document Information
                </h2>
                <p className="section-description">
                    Enter the basic information that will appear
                    on your PDF document
                </p>
                <div className="form-field">
                    <label htmlFor="title">
                        Document Title
                    </label>
                    <input id="title" name="title" type="text"
                    placeholder="e.g. Transaction Statement" value={formData.title} onChange={handleChange} />
                </div>
                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="documentNumber">
                            Document Number
                        </label>

                        <input id="documentNumber" name="documentNumber"
                        type="text" placeholder="e.g.DOC-001" value={formData.documentNumber} onChange={handleChange} />
                    </div>
                    <div className="form-field">
                        <label htmlFor="documentDate">
                            Document Date
                        </label>
                         <input
                            id="documentDate"
                            name="documentDate"
                            type="date"
                            value={formData.documentDate}
                            onChange={handleChange}
                        />

                    </div>

                </div>

            </div>


            {/* Company Information */}

            <div className="form-section">

                <h2 className="section-title">
                    Company Information
                </h2>

                <p className="section-description">
                    Enter the company information that should
                    appear in the PDF header.
                </p>


                <div className="form-field">

                    <label htmlFor="companyName">
                        Company Name
                    </label>

                    <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        placeholder="e.g. ABC Technologies Pvt Ltd"
                        value={formData.companyName}
                        onChange={handleChange}
                    />

                </div>


                <div className="form-field">

                    <label htmlFor="companyAddress">
                        Company Address
                    </label>

                    <input
                        id="companyAddress"
                        name="companyAddress"
                        type="text"
                        placeholder="e.g. Mumbai, Maharashtra"
                        value={formData.companyAddress}
                        onChange={handleChange}
                    />

                </div>


                <div className="form-row">

                    <div className="form-field">

                        <label htmlFor="companyEmail">
                            Company Email
                        </label>

                        <input
                            id="companyEmail"
                            name="companyEmail"
                            type="email"
                            placeholder="support@example.com"
                            value={formData.companyEmail}
                            onChange={handleChange}
                        />

                    </div>


                    <div className="form-field">

                        <label htmlFor="companyPhone">
                            Company Phone
                        </label>

                        <input
                            id="companyPhone"
                            name="companyPhone"
                            type="tel"
                            placeholder="+91 9876543210"
                            value={formData.companyPhone}
                            onChange={handleChange}
                        />

                    </div>

                </div>

            </div>


            {/* Actions */}

            <div className="form-actions">

                <button
                    type="submit"
                    className="primary-button"
                >
                    Next Step
                    <span>→</span>
                </button>

            </div>

        </form>
    );

}

export default DocumentForm;