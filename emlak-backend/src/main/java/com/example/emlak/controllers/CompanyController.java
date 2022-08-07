package com.example.emlak.controllers;

import com.example.emlak.dto.CompanyDTO;
import com.example.emlak.dto.CompanyLoginDTO;
import com.example.emlak.entities.Company;
import com.example.emlak.services.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/company")
@CrossOrigin("*")
public class CompanyController {
    private final CompanyService companyService;

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    public Long getCompany(@RequestBody CompanyLoginDTO companyLoginDTO) {
        return this.companyService.getCompany(companyLoginDTO);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<CompanyDTO> getAllCompanies() {
        return this.companyService.getAllCompanies();
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.OK)
    public Company createCompany(@RequestBody Company company){
        return this.companyService.createCompany(company);
    }

    @PutMapping("/edit/{companyId}")
    @ResponseStatus(HttpStatus.OK)
    public  Company updateCompany(@PathVariable(value = "companyId") Long companyId, @RequestBody Company company) {
        return this.companyService.updateCompany(companyId, company);
    }

    @DeleteMapping("/delete/{companyId}")
    @ResponseStatus(HttpStatus.OK)
    public  Boolean deleteCompany(@PathVariable(value = "companyId") Long companyId) {
        return this.companyService.deleteCompany(companyId);
    }
}
