import {ButtonRouge, Button as Banana} from "@/composants/Button";
// import {Button as EasterButton} from "@/composants/easter/Button";


const BusinessCard = () => {
  return (
    <div className="business-card">
      <h2>Jane Doe</h2>
      <p>Software Engineer</p>
      <p>jane.doe@example.com</p>

      <ButtonRouge />
      <Banana />
    </div>
  );

}

export default BusinessCard;