import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatWebsocketGateway } from './chat.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './entities/chat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chat])],
  providers: [ChatWebsocketGateway, ChatService],
})
export class ChatModule {}
