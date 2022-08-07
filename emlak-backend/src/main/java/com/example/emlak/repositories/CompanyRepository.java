package com.example.emlak.repositories;

import com.example.emlak.entities.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
      Company findAllByName(String name);

      Optional<Company> findByEmail(String email);
}
