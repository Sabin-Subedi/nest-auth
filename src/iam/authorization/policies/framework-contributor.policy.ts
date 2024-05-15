import { Injectable } from '@nestjs/common';
import { ActiveUserData } from 'src/iam/interfaces/active-user-data.interface';
import { Policy } from './interfaces/policy.interface';
import { PolicyHandlerStorage } from './policy-handler.storage';
import { PolicyHandler } from './interfaces/policy-handler.interface';

export class FrameworkContributorPolicy implements Policy {
  name = 'framework-contributor';
}

@Injectable()
export class FrameworkContributorPolicyHandler
  implements PolicyHandler<FrameworkContributorPolicy>
{
  constructor(private readonly policyHandlerStorage: PolicyHandlerStorage) {
    this.policyHandlerStorage.add(FrameworkContributorPolicy, this);
  }
  async handle(
    policy: FrameworkContributorPolicy,
    user: ActiveUserData,
  ): Promise<void> {
    const isFrameworkContributor = user.email.endsWith('@nestjs.com');

    if (!isFrameworkContributor) {
      throw new Error('You are not a framework contributor');
    }
  }
}
