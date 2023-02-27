export class PaginationResponse<T> {
  constructor(data: [T[], number], skip: number, take: number) {
    const page = skip + 1;
    const [result, total] = data;
    const lastPage = Math.ceil(total / take);
    const nextPage = page + 1 > lastPage ? null : page + 1;
    const prevPage = page - 1 < 1 ? null : page - 1;

    this.statusCode = 'success';
    this.data = result;
    this.count = total;
    this.currentPage = page;
    this.nextPage = nextPage;
    this.prevPage = prevPage;
    this.lastPage = lastPage;
  }
  statusCode: string;
  data: T[];
  count: number;
  currentPage: number;
  nextPage: number | null;
  prevPage: number | null;
  lastPage: number;
}
