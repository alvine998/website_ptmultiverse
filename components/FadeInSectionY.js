import { useEffect, useRef, useState } from "react"

const FadeInSectionY = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false)
    const domRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(`entry`, entry, `is = `, entry.isIntersecting)
                setIsVisible(entry.isIntersecting)
            })
        })

        const { current } = domRef
        observer.observe(current)
    }, [])

    return (
        <>
            <div className={`fade-in-section-y ${isVisible ? "is-visible" : ""}`} ref={domRef}>
                {children}
            </div>
        </>
    )
}

export default FadeInSectionY