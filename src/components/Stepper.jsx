const steps =[
    "Document",
    "Content",
    "Design",
    "Preview"
];

function Stepper({ currentStep = 1 }) {

    return (
        <div className="stepper">

            {steps.map((step, index) => {

                const stepNumber = index + 1;

                const isActive =
                    stepNumber === currentStep;

                const isCompleted =
                    stepNumber < currentStep;

                return (
                    <div
                        className="step-wrapper"
                        key={step}
                    >

                        <div
                            className={`step ${
                                isActive
                                    ? "active"
                                    : ""
                            } ${
                                isCompleted
                                    ? "completed"
                                    : ""
                            }`}
                        >
                            {stepNumber}
                        </div>

                        <div
                            className={`step-label ${
                                isActive
                                    ? "active-label"
                                    : ""
                            }`}
                        >
                            {step}
                        </div>

                        {stepNumber < steps.length && (
                            <div
                                className={`step-line ${
                                    isCompleted
                                        ? "completed-line"
                                        : ""
                                }`}
                            />
                        )}

                    </div>
                );
            })}

        </div>
    );
}

export default Stepper;