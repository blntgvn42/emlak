package com.example.emlak.controllers;

import com.example.emlak.entities.PropertyType;
import com.example.emlak.services.PropertyTypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/property-type")
@CrossOrigin("*")
public class PropertyTypeController {
    private final PropertyTypeService propertyTypeService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<PropertyType> getAllPropertyTypes() {
        return this.propertyTypeService.getAllPropertyTypes();
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.OK)
    public PropertyType createPropertyType(@RequestBody PropertyType propertyType) {
        return this.propertyTypeService.createPropertyType(propertyType);
    }

    @PutMapping("/edit/{propertyTypeId}")
    @ResponseStatus(HttpStatus.OK)
    public PropertyType updatePropertyType(@PathVariable(value = "propertyTypeId") Long propertyTypeId, @RequestBody PropertyType propertyType) {
        return this.propertyTypeService.updatePropertyType(propertyTypeId, propertyType);
    }

    @DeleteMapping("/delete/{propertyTypeId}")
    @ResponseStatus(HttpStatus.OK)
    public Boolean deletePropertyType(@PathVariable("propertyTypeId") Long propertyTypeId) {
        return this.propertyTypeService.deletePropertyType(propertyTypeId);
    }
}
