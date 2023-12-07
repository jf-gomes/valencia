export default function PlusMinusBtn({ type }){
    if (type == 'plus'){
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#4D194D" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>
        )
    } else if (type == 'minus'){
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#4D194D" class="bi bi-dash" viewBox="0 0 16 16">
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
            </svg>
        )
    }
}