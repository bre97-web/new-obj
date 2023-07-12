package com.pojo;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class User {
    int u_id;
    String u_name;
    String u_pwd;
}
