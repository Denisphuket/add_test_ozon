import {Body, Controller, Post} from '@nestjs/common';
import {CreateProductService} from "./create-product.service";

@Controller('create-product')
export class CreateProductController {
	constructor(private readonly createProductService: CreateProductService) {
	}

	@Post()
	createProduct(@Body() dto){
		return this.createProductService.createProduct(dto)
	}
}
