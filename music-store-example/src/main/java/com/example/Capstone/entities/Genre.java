package com.example.Capstone.entities;


import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Genre {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String Name;

}
