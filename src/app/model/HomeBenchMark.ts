export interface HomeBenchMark {
    data: Array<HomeBenchMarkData>;
}

interface HomeBenchMarkData {
    id: string;
    details: BenchmarkMethod;
}

interface BenchmarkMethod {
    userId: string;
    method: string;
    startTime: Date;
    endTime: Date;
}