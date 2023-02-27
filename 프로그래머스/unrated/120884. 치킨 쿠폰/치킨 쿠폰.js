function solution(chicken) {
    const calculte = (chicken) => {
        if (chicken / 10 < 1) return 0;
        const services = ~~(chicken / 10);
        return services + calculte(services + (chicken % 10));
    };
    return calculte(chicken)
}