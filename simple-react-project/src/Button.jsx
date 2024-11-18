export default function Button({label, setCount}) {
    return(<button onClick={setCount}>{label}</button>)
}
