package com.example.emlak.services.implementations;

import com.example.emlak.dto.CompanyCustomerDTO;
import com.example.emlak.dto.CustomerDTO;
import com.example.emlak.dto.CustomerLoginDTO;
import com.example.emlak.entities.Company;
import com.example.emlak.entities.Customer;
import com.example.emlak.repositories.CompanyRepository;
import com.example.emlak.repositories.CustomerRepository;
import com.example.emlak.services.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomerImplementation implements CustomerService {
    private final CustomerRepository customerRepository;
    private final CompanyRepository companyRepository;

    @Override
    public Long getCustomer(CustomerLoginDTO customerLoginDTO) {
        Optional<Customer> customer = this.customerRepository.findByEmail(customerLoginDTO.getEmail());
        if (customer.isPresent() && Objects.equals(customer.get().getPassword(), customerLoginDTO.getPassword())) {
            return customer.get().getId();
        }
        return 0L;
    }

    @Override
    public List<CustomerDTO> getAllCustomers() {
        List<Customer> allCustomers = this.customerRepository.findAll();

        return allCustomers.stream().map(customer -> {

            CustomerDTO customerDTO = new CustomerDTO();
            customerDTO.setId(customer.getId());
            customerDTO.setName(customer.getName());
            customerDTO.setPhone(customer.getPhone());
            customerDTO.setEmail(customer.getEmail());
            customerDTO.setIsExecutive(customer.getIsExecutive());
            customerDTO.setCompany_id(customer.getCompany().getId());

            return customerDTO;
        }).collect(Collectors.toList());
    }

    @Override
    public CompanyCustomerDTO getCustomersByCompany(String companyName) {
        Company company = this.companyRepository.findAllByName(companyName);

        CompanyCustomerDTO companyCustomerDTO = new CompanyCustomerDTO();
        companyCustomerDTO.setAddress(company.getAddress());
        companyCustomerDTO.setName(company.getName());
        companyCustomerDTO.setPhone(company.getPhone());
        companyCustomerDTO.setWebsite(company.getWebsite());
        companyCustomerDTO.setId(company.getId());

        List<Customer> employees = this.customerRepository.findAllByCompany(company);
        employees.forEach(e -> e.setCompany(null));

        companyCustomerDTO.setEmployees(employees);
        return companyCustomerDTO;
    }

    @Override
    public Customer createCustomer(Customer customer, Long companyId) {
        Optional<Company> companyDB = this.companyRepository.findById(companyId);
        if (companyDB.isPresent()) {
            customer.setCompany(companyDB.get());
            return this.customerRepository.save(customer);
        }
        return null;
    }

    @Override
    public Customer updateCustomer(Long customerId, Customer customer, Long companyId) {
        Optional<Customer> customerDB = this.customerRepository.findById(customerId);
        Optional<Company> companyDB = this.companyRepository.findById(companyId);

        if (customerDB.isPresent() && companyDB.isPresent()) {
            customerDB.get().setName(customer.getName());
            customerDB.get().setPhone(customer.getPhone());
            customerDB.get().setEmail(customer.getEmail());
            customerDB.get().setIsExecutive(customer.getIsExecutive());
            customerDB.get().setPassword(customer.getPassword());
            customerDB.get().setCompany(companyDB.get());
            return this.customerRepository.save(customerDB.get());
        }
        return null;
    }

    @Override
    public Boolean deleteCustomer(Long customerId) {
        if (this.customerRepository.findById(customerId).isPresent()) {
            this.customerRepository.deleteById(customerId);
            return true;
        }
        return false;
    }
}
