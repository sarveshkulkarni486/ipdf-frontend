import { useState } from "react";

function ContentForm({ onNext, onBack }) {

    const [formData, setFormData] = useState({
        customerName: "",
        customerEmail: "",
        customerPhone: "",
        customerAddress: "",

        columns: [
            "Date",
            "Description",
            "Reference",
            "Amount"
        ],

        rows: [
            ["", "", "", ""]
        ],

        summary: {
            subtotal: "",
            tax: "",
            total: ""
        },

        notes: ""
    });


    // =====================================================
    // CUSTOMER / GENERAL FIELD
    // =====================================================

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));
    };


    // =====================================================
    // SUMMARY
    // =====================================================

    const handleSummaryChange = (event) => {

        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,

            summary: {
                ...previousData.summary,
                [name]: value
            }
        }));
    };


    // =====================================================
    // COLUMN
    // =====================================================

    const handleColumnChange = (
        columnIndex,
        value
    ) => {

        setFormData((previousData) => {

            const updatedColumns = [
                ...previousData.columns
            ];

            updatedColumns[columnIndex] = value;

            return {
                ...previousData,
                columns: updatedColumns
            };
        });
    };


    // =====================================================
    // ADD COLUMN
    // =====================================================

    const addColumn = () => {

        setFormData((previousData) => {

            const updatedColumns = [
                ...previousData.columns,
                "New Column"
            ];

            const updatedRows =
                previousData.rows.map((row) => [
                    ...row,
                    ""
                ]);

            return {
                ...previousData,
                columns: updatedColumns,
                rows: updatedRows
            };
        });
    };


    // =====================================================
    // REMOVE COLUMN
    // =====================================================

    const removeColumn = (columnIndex) => {

        if (formData.columns.length <= 1) {
            return;
        }

        setFormData((previousData) => {

            const updatedColumns =
                previousData.columns.filter(
                    (_, index) =>
                        index !== columnIndex
                );

            const updatedRows =
                previousData.rows.map((row) =>
                    row.filter(
                        (_, index) =>
                            index !== columnIndex
                    )
                );

            return {
                ...previousData,
                columns: updatedColumns,
                rows: updatedRows
            };
        });
    };


    // =====================================================
    // ROW
    // =====================================================

    const handleRowChange = (
        rowIndex,
        columnIndex,
        value
    ) => {

        setFormData((previousData) => {

            const updatedRows =
                previousData.rows.map(
                    (row, currentRowIndex) => {

                        if (
                            currentRowIndex !== rowIndex
                        ) {
                            return row;
                        }

                        const updatedRow = [
                            ...row
                        ];

                        updatedRow[columnIndex] =
                            value;

                        return updatedRow;
                    }
                );

            return {
                ...previousData,
                rows: updatedRows
            };
        });
    };


    // =====================================================
    // ADD ROW
    // =====================================================

    const addRow = () => {

        setFormData((previousData) => ({
            ...previousData,

            rows: [
                ...previousData.rows,
                previousData.columns.map(() => "")
            ]
        }));
    };


    // =====================================================
    // REMOVE ROW
    // =====================================================

    const removeRow = (rowIndex) => {

        if (formData.rows.length <= 1) {
            return;
        }

        setFormData((previousData) => ({
            ...previousData,

            rows: previousData.rows.filter(
                (_, index) =>
                    index !== rowIndex
            )
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
            className="content-form"
            onSubmit={handleSubmit}
        >

            {/* =================================================
                CUSTOMER INFORMATION
            ================================================= */}

            <div className="form-section">

                <h2 className="section-title">
                    Customer Information
                </h2>

                <p className="section-description">
                    Enter the customer or recipient
                    information that should appear in
                    the document.
                </p>


                <div className="form-field">

                    <label htmlFor="customerName">
                        Customer Name
                    </label>

                    <input
                        id="customerName"
                        name="customerName"
                        type="text"
                        placeholder="e.g. John Doe"
                        value={formData.customerName}
                        onChange={handleChange}
                    />

                </div>


                <div className="form-row">

                    <div className="form-field">

                        <label htmlFor="customerEmail">
                            Email Address
                        </label>

                        <input
                            id="customerEmail"
                            name="customerEmail"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.customerEmail}
                            onChange={handleChange}
                        />

                    </div>


                    <div className="form-field">

                        <label htmlFor="customerPhone">
                            Phone Number
                        </label>

                        <input
                            id="customerPhone"
                            name="customerPhone"
                            type="tel"
                            placeholder="+91 9876543210"
                            value={formData.customerPhone}
                            onChange={handleChange}
                        />

                    </div>

                </div>


                <div className="form-field">

                    <label htmlFor="customerAddress">
                        Address
                    </label>

                    <input
                        id="customerAddress"
                        name="customerAddress"
                        type="text"
                        placeholder="Mumbai, Maharashtra"
                        value={formData.customerAddress}
                        onChange={handleChange}
                    />

                </div>

            </div>


            {/* =================================================
                TABLE CONTENT
            ================================================= */}

            <div className="form-section">

                <div className="section-heading-row">

                    <div>

                        <h2 className="section-title">
                            Table Content
                        </h2>

                        <p className="section-description">
                            Define the columns and rows
                            that should appear in your PDF.
                        </p>

                    </div>

                    <button
                        type="button"
                        className="secondary-button"
                        onClick={addColumn}
                    >
                        + Add Column
                    </button>

                </div>


                {/* COLUMN DEFINITIONS */}

                <div className="columns-editor">

                    {formData.columns.map(
                        (column, index) => (

                            <div
                                className="column-editor"
                                key={index}
                            >

                                <label>
                                    Column {index + 1}
                                </label>

                                <div className="column-input">

                                    <input
                                        type="text"
                                        value={column}
                                        onChange={(event) =>
                                            handleColumnChange(
                                                index,
                                                event.target.value
                                            )
                                        }
                                    />

                                    <button
                                        type="button"
                                        className="icon-button danger"
                                        onClick={() =>
                                            removeColumn(index)
                                        }
                                        title="Remove column"
                                    >
                                        ×
                                    </button>

                                </div>

                            </div>

                        )
                    )}

                </div>


                {/* DATA TABLE */}

                <div className="data-table-wrapper">

                    <table className="content-table">

                        <thead>

                            <tr>

                                <th className="row-number">
                                    #
                                </th>

                                {formData.columns.map(
                                    (column, index) => (

                                        <th key={index}>
                                            {column || "Column"}
                                        </th>

                                    )
                                )}

                                <th className="row-action">
                                    Action
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {formData.rows.map(
                                (row, rowIndex) => (

                                    <tr key={rowIndex}>

                                        <td className="row-number">
                                            {rowIndex + 1}
                                        </td>


                                        {row.map(
                                            (
                                                value,
                                                columnIndex
                                            ) => (

                                                <td
                                                    key={
                                                        columnIndex
                                                    }
                                                >

                                                    <input
                                                        type="text"
                                                        value={value}
                                                        placeholder={
                                                            "Enter value"
                                                        }
                                                        onChange={(
                                                            event
                                                        ) =>
                                                            handleRowChange(
                                                                rowIndex,
                                                                columnIndex,
                                                                event
                                                                    .target
                                                                    .value
                                                            )
                                                        }
                                                    />

                                                </td>

                                            )
                                        )}


                                        <td className="row-action">

                                            <button
                                                type="button"
                                                className="icon-button danger"
                                                onClick={() =>
                                                    removeRow(
                                                        rowIndex
                                                    )
                                                }
                                                title="Remove row"
                                            >
                                                ×
                                            </button>

                                        </td>

                                    </tr>

                                )
                            )}

                        </tbody>

                    </table>

                </div>


                <button
                    type="button"
                    className="add-row-button"
                    onClick={addRow}
                >
                    + Add Row
                </button>

            </div>


            {/* =================================================
                SUMMARY
            ================================================= */}

            <div className="form-section">

                <h2 className="section-title">
                    Summary
                </h2>

                <p className="section-description">
                    Add optional summary information
                    to the document.
                </p>


                <div className="summary-grid">

                    <div className="form-field">

                        <label htmlFor="subtotal">
                            Subtotal
                        </label>

                        <input
                            id="subtotal"
                            name="subtotal"
                            type="text"
                            placeholder="0.00"
                            value={
                                formData.summary.subtotal
                            }
                            onChange={
                                handleSummaryChange
                            }
                        />

                    </div>


                    <div className="form-field">

                        <label htmlFor="tax">
                            Tax
                        </label>

                        <input
                            id="tax"
                            name="tax"
                            type="text"
                            placeholder="0.00"
                            value={
                                formData.summary.tax
                            }
                            onChange={
                                handleSummaryChange
                            }
                        />

                    </div>


                    <div className="form-field">

                        <label htmlFor="total">
                            Total
                        </label>

                        <input
                            id="total"
                            name="total"
                            type="text"
                            placeholder="0.00"
                            value={
                                formData.summary.total
                            }
                            onChange={
                                handleSummaryChange
                            }
                        />

                    </div>

                </div>


                <div className="form-field">

                    <label htmlFor="notes">
                        Notes
                    </label>

                    <textarea
                        id="notes"
                        name="notes"
                        placeholder="Add any additional notes..."
                        value={formData.notes}
                        onChange={handleChange}
                    />

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

export default ContentForm;