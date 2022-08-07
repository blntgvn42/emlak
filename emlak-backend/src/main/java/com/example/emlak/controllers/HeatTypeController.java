package com.example.emlak.controllers;

import com.example.emlak.entities.HeatType;
import com.example.emlak.services.HeatTypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/heat-type")
@CrossOrigin("*")
public class HeatTypeController {
    private final HeatTypeService heatTypeService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<HeatType> getAllHeatTypes() {
        return this.heatTypeService.getAllHeatTypes();
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.OK)
    public HeatType createHeatType(@RequestBody HeatType heatType) {
        return this.heatTypeService.createHeatType(heatType);
    }

    @PutMapping("/edit/{heatTypeId}")
    @ResponseStatus(HttpStatus.OK)
    public HeatType updateHeatType(@PathVariable(value = "heatTypeId") Long heatTypeId, @RequestBody HeatType heatType) {
        return this.heatTypeService.updateHeatType(heatTypeId, heatType);
    }

    @DeleteMapping("/delete/{heatTypeId}")
    @ResponseStatus(HttpStatus.OK)
    public Boolean deleteHeatType(@PathVariable("heatTypeId") Long heatTypeId) {
        return this.heatTypeService.deleteHeatType(heatTypeId);
    }
}
