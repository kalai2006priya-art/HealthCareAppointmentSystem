export default function SpecialistFilter({ setSpecialist }) {
  return (
    <select onChange={e => setSpecialist(e.target.value)}>
      <option value="">All Specialists</option>
      <option value="General Physician">General Physician</option>
      <option value="Cardiologist">Cardiologist</option>
      <option value="Dermatologist">Dermatologist</option>
      <option value="Pediatrician">Pediatrician</option>
    </select>
  );
}
