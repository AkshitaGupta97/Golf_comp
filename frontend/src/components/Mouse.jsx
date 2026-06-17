import { useEffect, useState } from "react";


const Mouse = () => {

    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const newParticle = {
                id: Date.now() + Math.random(),
                x: event.clientX,
                y: event.clientY,
                size: Math.random() * 5 + 5,
            }
            setParticles((prevParticles) => [...prevParticles, newParticle]);
            // remove particle after 1 second
            setTimeout(() => {
                setParticles((prevParticles) => prevParticles.filter(p => p.id !== newParticle.id));
            }, 1000);
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };

    }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        {particles.map((particle) => (
            <div
                key={particle.id}
                style={{ 
                    position: "absolute",
                    left: particle.x,
                    top: particle.y,
                    width: particle.size,
                    height: particle.size,
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    borderRadius: "50%",
                }}
            />
        ))}
    </div>
  );
};

export default Mouse
