package com.example.emlak.controllers;

import com.example.emlak.entities.AdvertisementType;
import com.example.emlak.services.AdvertisementTypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/advertisement-type")
@CrossOrigin("*")
public class AdvertisementTypeController {

    private final AdvertisementTypeService advertisementTypeService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<AdvertisementType> getAllAdvertisementTypes() {
        return this.advertisementTypeService.getAllAdvertisementTypes();
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.OK)
    public AdvertisementType createAdvertisementType(@RequestBody AdvertisementType advertisementType) {
        return this.advertisementTypeService.createAdvertisementType(advertisementType);
    }

    @PutMapping("/edit/{advertisementTypeId}")
    @ResponseStatus(HttpStatus.OK)
    public AdvertisementType updateAdvertisementType(@PathVariable(value = "advertisementTypeId") Long advertisementTypeId, @RequestBody AdvertisementType advertisementType) {
        return this.advertisementTypeService.updateAdvertisementType(advertisementTypeId, advertisementType);
    }

    @DeleteMapping("/delete/{advertisementTypeId}")
    @ResponseStatus(HttpStatus.OK)
    public Boolean deleteAdvertisementType(@PathVariable(value = "advertisementTypeId") Long advertisementTypeId) {
        return this.advertisementTypeService.deleteAdvertisementType(advertisementTypeId);
    }
}
