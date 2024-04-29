import { getDiff } from "../../helpers/helpers";

export default function displayErrors(errors) {
    let errors_jsx = errors.map((val, idx) => {
        let correctVal = `Valor correcto: ${val.correctValue}`;
        let incorrectValue = `Valor del archivo: ${val.valueProvided}`;

        let original = val.correctValue.split("");
        let new_val = val.valueProvided.split("");

        let diff = getDiff(new_val, original);
        return (
            <div key={idx} className="resItem">
                <h4 className="resTitle">{val.title}</h4>
                <div className="vals">
                    <p className="correct">{correctVal}</p>
                    <p className="incorrect">{incorrectValue}</p>
                    <ul className="diff-sec">
                        {diff.map((item, idx) => (
                            <li
                                className="diff-li"
                                key={idx}
                                style={{
                                    color:
                                        item.type === "added"
                                            ? "green"
                                            : item.type === "removed"
                                                ? "red"
                                                : "white",
                                }}
                            >
                                <pre style={{ fontSize: "15px" }}>
                                    {item.type === "added" && "+"}
                                    {item.type === "removed" && "-"}
                                    {item.value}
                                </pre>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    });

    return errors_jsx;
};
