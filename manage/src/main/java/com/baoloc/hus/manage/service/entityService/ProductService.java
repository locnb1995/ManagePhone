package com.baoloc.hus.manage.service.entityService;

import com.baoloc.hus.manage.data.ResponseResult;
import com.baoloc.hus.manage.entity.Product;
import com.baoloc.hus.manage.service.AppService;

public abstract class ProductService extends AppService<Product, Long>
{
	public abstract ResponseResult getProductByName(String name);
}
