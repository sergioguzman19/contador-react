export function Counter() {
        let goalDate = new Date('2024-04-25');
        let actualDate = new Date();
        let dayInMs = 86400000;
        let diference = goalDate - actualDate
        let difDays = Math.round(diference / dayInMs);
        let weeks = Math.round(difDays / 7)
        
        return (
        <div className="flex flex-col items-center">
                <h2 className="text-xl">
                    FALTAN <span className="font-bold text-indigo-400">{difDays}</span> DIAS.
                </h2>
                <h3 className="text-lg">
                    Que equivalen a <span className="font-bold text-indigo-400">{weeks}</span> semanas
                </h3>
        </div>
    )
}