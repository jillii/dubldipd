export default function Stars() {
    return (
        <>
            <div className="test"></div>
            {new Array(2).fill('').map((x, index) =>
                <div id={`stars-${index + 1}`} className="stars">
                    {new Array(35).fill('').map((x, index) =>
                        <div className="star">+</div>
                    )}
                </div>
            )}
        </>
    );
}