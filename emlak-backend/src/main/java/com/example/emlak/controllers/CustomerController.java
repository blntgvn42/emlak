package com.example.emlak.controllers;

import com.example.emlak.dto.CompanyCustomerDTO;
import com.example.emlak.dto.CustomerLoginDTO;
import com.example.emlak.dto.CustomerRequestDTO;
import com.example.emlak.dto.CustomerDTO;
import com.example.emlak.entities.Customer;
import com.example.emlak.services.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/customer")
@CrossOrigin("*")
public class CustomerController {
    private final CustomerService customerService;

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    public Long getCustomer(@RequestBody CustomerLoginDTO customerLoginDTO) {
        return this.customerService.getCustomer(customerLoginDTO);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<CustomerDTO> getAllCustomers() {
        return this.customerService.getAllCustomers();
    }

    @GetMapping("/")
    @ResponseStatus(HttpStatus.OK)
    public CompanyCustomerDTO getCustomersByCompany(@RequestParam String companyName) {
        return this.customerService.getCustomersByCompany(companyName);
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.OK)
    public Customer createCustomer(@RequestBody CustomerRequestDTO customerRequestDTO) {
        return this.customerService.createCustomer(customerRequestDTO.getCustomer(), customerRequestDTO.getCompanyId());
    }

    @PutMapping("/edit/{customerId}")
    @ResponseStatus(HttpStatus.OK)
    public Customer updateCustomer(@PathVariable(name = "customerId") Long customerId, @RequestBody CustomerRequestDTO customerRequestDTO) {
        return this.customerService.updateCustomer(customerId, customerRequestDTO.getCustomer(), customerRequestDTO.getCompanyId());
    }

    @DeleteMapping("/delete/{customerId}")
    @ResponseStatus(HttpStatus.OK)
    public Boolean deleteCustomer(@PathVariable(name = "customerId") Long customerId) {
        return this.customerService.deleteCustomer(customerId);
    }
}
