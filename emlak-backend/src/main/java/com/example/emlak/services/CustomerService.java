package com.example.emlak.services;

import com.example.emlak.dto.CompanyCustomerDTO;
import com.example.emlak.dto.CustomerDTO;
import com.example.emlak.dto.CustomerLoginDTO;
import com.example.emlak.entities.Customer;

import java.util.List;

public interface CustomerService {
    Long getCustomer(CustomerLoginDTO customerLoginDTO);
    List<CustomerDTO> getAllCustomers();
    CompanyCustomerDTO getCustomersByCompany(String companyName);
    Customer createCustomer(Customer customer, Long companyId);
    Customer updateCustomer(Long customerId, Customer customer, Long companyId);
    Boolean deleteCustomer(Long customerId);
}
