import { Controller, Get } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('frontend/releases')
  async getFrontendReleaseList(): Promise<any> {
    const res = await this.githubService.getFrontendReleaseList();
    return res;
  }

  @Get('backend/releases')
  async getBackendReleaseList(): Promise<any> {
    const res = await this.githubService.getBackendReleaseList();
    return res;
  }
}
