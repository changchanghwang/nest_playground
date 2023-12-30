import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { HealthModule } from '@libs/health';
import { DatabaseModule } from '@libs/datasource';
import { AccountModule } from './services/accounts/module';
import { ProductModule } from './services/products/module';
import { OrderModule } from './services/orders/module';
import { OrderProductLogModule } from './services/order-product-logs/module';

@Module({
  imports: [
    DatabaseModule,
    EventEmitterModule.forRoot(),
    HealthModule,
    AccountModule,
    ProductModule,
    OrderModule,
    OrderProductLogModule,
  ],
})
export class AppModule {}
