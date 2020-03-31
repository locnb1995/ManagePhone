package com.baoloc.hus.manage.webservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baoloc.hus.manage.data.ResponseResult;
import com.baoloc.hus.manage.service.entityService.AdminService;
import com.baoloc.hus.manage.service.entityService.CustomerService;
import com.baoloc.hus.manage.service.entityService.OrderService;
import com.baoloc.hus.manage.service.entityService.ProductService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/")
public final class ManageAPI
{
	@Autowired
	private ProductService productService;
	@Autowired
	private CustomerService customerService;
	@Autowired
	private AdminService adminService;
	@Autowired
	private OrderService orderService;

	@GetMapping("get-all-products")
	public ResponseResult getAllProducts()
	{
		return this.productService.getAllEntity();
	}

	@GetMapping("get-all-customers")
	public ResponseResult getAllCustomers()
	{
		return this.customerService.getAllEntity();
	}

	@GetMapping("get-all-admins")
	public ResponseResult getAllAdmins()
	{
		return this.adminService.getAllEntity();
	}

	@GetMapping("get-all-orders")
	public ResponseResult getAllOrders()
	{
		return this.orderService.getAllEntity();
	}
}
