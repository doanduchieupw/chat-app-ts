import { Module } from '@nestjs/common';
import { Services } from '../utils/constants';
import { ConversationController } from './conversation.controller';
import { ConversationService } from './conversation.service';

@Module({
  controllers: [ConversationController],
  providers: [
    {
      provide: Services.CONVERSATION,
      useClass: ConversationService,
    },
  ],
})
export class ConversationsModule {}
