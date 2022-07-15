type DisplayProps = {
  temp: number;
  icon: string;
  description: string;
};

export default function Display({ temp, icon, description }: DisplayProps) {
  return (
    <div className="card">
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
      <p>{temp}</p>
      <p>{description}</p>
    </div>
  );
}
