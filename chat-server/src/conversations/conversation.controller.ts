import { Controller, Post } from '@nestjs/common';
import { Routes } from '../utils/constants';

@Controller(Routes.CONVERSATION)
export class ConversationController {
  @Post()
  createConversation() {}
}
