package com.example.emlak.repositories;

import com.example.emlak.dto.CustomerLoginDTO;
import com.example.emlak.entities.Company;
import com.example.emlak.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    List<Customer> findAllByCompany(Company company);

    Optional<Customer> findByEmail(String email);
}
