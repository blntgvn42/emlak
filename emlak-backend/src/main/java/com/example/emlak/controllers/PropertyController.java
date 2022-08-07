package com.example.emlak.controllers;

import com.example.emlak.dto.PropertyDTO;
import com.example.emlak.dto.PropertyRequestDTO;
import com.example.emlak.entities.Property;
import com.example.emlak.services.PropertyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/property")
@CrossOrigin("*")
public class PropertyController {
    private final PropertyService propertyService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<PropertyDTO> getAllProperties() {
        return this.propertyService.getAllProperties();
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.OK)
    public Property createProperty(@RequestBody PropertyRequestDTO propertyRequestDTO) {
        return this.propertyService.createProperty(propertyRequestDTO.getProperty(), propertyRequestDTO.getCompanyId(), propertyRequestDTO.getAdvertisementTypeId(), propertyRequestDTO.getPropertyTypeId(), propertyRequestDTO.getHeatTypeId());
    }
}
