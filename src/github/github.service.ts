import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class GithubService {
  constructor(private readonly httpService: HttpService) {}

  GITHUB_API_URL = 'https://api.github.com';
  OWNER = 'andylilfs0217';

  async getFrontendReleaseList(): Promise<any> {
    const res = await lastValueFrom(
      this.httpService.get(
        `${this.GITHUB_API_URL}/repos/${this.OWNER}/portfolio-frontend/releases`,
      ),
    );
    const data = res.data;
    return data;
  }

  async getBackendReleaseList(): Promise<any> {
    const res = await lastValueFrom(
      this.httpService.get(
        `${this.GITHUB_API_URL}/repos/${this.OWNER}/portfolio-backend/releases`,
      ),
    );
    const data = res.data;
    return data;
  }
}
