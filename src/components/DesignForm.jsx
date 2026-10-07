import { useState } from "react";

function DesignForm({ initialData, onNext, onBack }) {

    const [formData, setFormData] = useState({
        themeColor: "#4F46D8",
        fontFamily: "Helvetica",
        pageSize: "A4",
        orientation: "PORTRAIT",
        margin: "NORMAL",
        headerStyle: "PROFESSIONAL",
        tableStyle: "STANDARD",
        showLogo: true,
        showPageNumbers: true,
        showFooter: true,
        logo: null,

        ...initialData
    });


    // =====================================================
    // HANDLE NORMAL CHANGES
    // =====================================================

    const handleChange = (event) => {

        const { name, value, type, checked } = event.target;

        setFormData((previousData) => ({
            ...previousData,

            [name]:
                type === "checkbox"
                    ? checked
                    : value
        }));
    };


    // =====================================================
    // LOGO
    // =====================================================

    const handleLogoChange = (event) => {

        const file = event.target.files[0];

        if (!file) {
            return;
        }

        setFormData((previousData) => ({
            ...previousData,
            logo: file
        }));
    };


    // =====================================================
    // SUBMIT
    // =====================================================

    const handleSubmit = (event) => {

        event.preventDefault();

        onNext(formData);
    };


    return (
        <form
            className="design-form"
            onSubmit={handleSubmit}
        >

            {/* =================================================
                APPEARANCE
            ================================================= */}

            <div className="form-section">

                <h2 className="section-title">
                    Appearance
                </h2>

                <p className="section-description">
                    Customize the visual appearance of
                    your PDF document.
                </p>


                <div className="design-grid">

                    {/* THEME COLOR */}

                    <div className="form-field">

                        <label htmlFor="themeColor">
                            Theme Color
                        </label>

                        <div className="color-picker-wrapper">

                            <input
                                id="themeColor"
                                name="themeColor"
                                type="color"
                                value={formData.themeColor}
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                value={formData.themeColor}
                                onChange={handleChange}
                                name="themeColor"
                                className="color-text-input"
                            />

                        </div>

                    </div>


                    {/* FONT */}

                    <div className="form-field">

                        <label htmlFor="fontFamily">
                            Font Family
                        </label>

                        <select
                            id="fontFamily"
                            name="fontFamily"
                            value={formData.fontFamily}
                            onChange={handleChange}
                        >

                            <option value="Helvetica">
                                Helvetica
                            </option>

                            <option value="Times-Roman">
                                Times Roman
                            </option>

                            <option value="Courier">
                                Courier
                            </option>

                        </select>

                    </div>

                </div>

            </div>


            {/* =================================================
                PAGE SETTINGS
            ================================================= */}

            <div className="form-section">

                <h2 className="section-title">
                    Page Settings
                </h2>

                <p className="section-description">
                    Configure the size, orientation and
                    spacing of your PDF.
                </p>


                <div className="design-grid">


                    {/* PAGE SIZE */}

                    <div className="form-field">

                        <label htmlFor="pageSize">
                            Page Size
                        </label>

                        <select
                            id="pageSize"
                            name="pageSize"
                            value={formData.pageSize}
                            onChange={handleChange}
                        >

                            <option value="A4">
                                A4
                            </option>

                            <option value="A3">
                                A3
                            </option>

                            <option value="A5">
                                A5
                            </option>

                            <option value="LETTER">
                                Letter
                            </option>

                            <option value="LEGAL">
                                Legal
                            </option>

                        </select>

                    </div>


                    {/* ORIENTATION */}

                    <div className="form-field">

                        <label htmlFor="orientation">
                            Orientation
                        </label>

                        <select
                            id="orientation"
                            name="orientation"
                            value={formData.orientation}
                            onChange={handleChange}
                        >

                            <option value="PORTRAIT">
                                Portrait
                            </option>

                            <option value="LANDSCAPE">
                                Landscape
                            </option>

                        </select>

                    </div>


                    {/* MARGIN */}

                    <div className="form-field">

                        <label htmlFor="margin">
                            Margins
                        </label>

                        <select
                            id="margin"
                            name="margin"
                            value={formData.margin}
                            onChange={handleChange}
                        >

                            <option value="NARROW">
                                Narrow
                            </option>

                            <option value="NORMAL">
                                Normal
                            </option>

                            <option value="WIDE">
                                Wide
                            </option>

                        </select>

                    </div>

                </div>

            </div>


            {/* =================================================
                HEADER & TABLE
            ================================================= */}

            <div className="form-section">

                <h2 className="section-title">
                    Header & Table
                </h2>

                <p className="section-description">
                    Choose how your company header and
                    data table should look.
                </p>


                <div className="design-grid">


                    {/* HEADER STYLE */}

                    <div className="form-field">

                        <label htmlFor="headerStyle">
                            Header Style
                        </label>

                        <select
                            id="headerStyle"
                            name="headerStyle"
                            value={formData.headerStyle}
                            onChange={handleChange}
                        >

                            <option value="PROFESSIONAL">
                                Professional
                            </option>

                            <option value="MODERN">
                                Modern
                            </option>

                            <option value="MINIMAL">
                                Minimal
                            </option>

                            <option value="CORPORATE">
                                Corporate
                            </option>

                        </select>

                    </div>


                    {/* TABLE STYLE */}

                    <div className="form-field">

                        <label htmlFor="tableStyle">
                            Table Style
                        </label>

                        <select
                            id="tableStyle"
                            name="tableStyle"
                            value={formData.tableStyle}
                            onChange={handleChange}
                        >

                            <option value="STANDARD">
                                Standard
                            </option>

                            <option value="STRIPED">
                                Striped
                            </option>

                            <option value="BORDERED">
                                Bordered
                            </option>

                            <option value="MINIMAL">
                                Minimal
                            </option>

                        </select>

                    </div>

                </div>

            </div>


            {/* =================================================
                LOGO
            ================================================= */}

            <div className="form-section">

                <h2 className="section-title">
                    Company Logo
                </h2>

                <p className="section-description">
                    Upload a logo that can appear in the
                    PDF header.
                </p>


                <div className="logo-upload">

                    <label
                        htmlFor="logo"
                        className="upload-area"
                    >

                        <div className="upload-icon">
                            ↑
                        </div>

                        <div>

                            <strong>
                                Click to upload logo
                            </strong>

                            <p>
                                PNG, JPG or SVG
                            </p>

                        </div>

                    </label>


                    <input
                        id="logo"
                        type="file"
                        accept=".png,.jpg,.jpeg,.svg"
                        onChange={handleLogoChange}
                    />


                    {formData.logo && (

                        <div className="selected-file">

                            ✓ {formData.logo.name}

                        </div>

                    )}

                </div>

            </div>


            {/* =================================================
                OPTIONS
            ================================================= */}

            <div className="form-section">

                <h2 className="section-title">
                    Additional Options
                </h2>


                <div className="options-list">

                    <label className="checkbox-option">

                        <input
                            type="checkbox"
                            name="showLogo"
                            checked={formData.showLogo}
                            onChange={handleChange}
                        />

                        <span>
                            Show company logo
                        </span>

                    </label>


                    <label className="checkbox-option">

                        <input
                            type="checkbox"
                            name="showPageNumbers"
                            checked={formData.showPageNumbers}
                            onChange={handleChange}
                        />

                        <span>
                            Show page numbers
                        </span>

                    </label>


                    <label className="checkbox-option">

                        <input
                            type="checkbox"
                            name="showFooter"
                            checked={formData.showFooter}
                            onChange={handleChange}
                        />

                        <span>
                            Show footer
                        </span>

                    </label>

                </div>

            </div>


            {/* =================================================
                ACTIONS
            ================================================= */}

            <div className="form-actions">

                <button
                    type="button"
                    className="back-button"
                    onClick={onBack}
                >
                    ← Back
                </button>


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

export default DesignForm;