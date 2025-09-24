export default function DummyImage(props) {
  return <img {...props} alt={props.alt || ""} />;
}
