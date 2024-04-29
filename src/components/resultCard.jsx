import PropTypes from "prop-types";
import "../styles/components/ResultCard.css";
import ReportItem from "./ReportItem/ReportItem";

function ResultCard({ reports }) {
  return (
    <>
      {reports.map((report, idx) => (
        <ReportItem report={report} key={idx} />
      ))}
    </>
  );
}

ResultCard.propTypes = {
  reports: PropTypes.array.isRequired,
};

export default ResultCard;
