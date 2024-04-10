db = db.getSiblingDB('test_database');

db.createUser({
    user: 'test_container',
    pwd: 'test_container',
    roles: [
        { role: 'readWrite', db: 'test_database' }
    ]
});

const currentDate = new Date("2024-01-01");

//2AD
// room type code SJSB - MP/HD
for (let i = 0; i < 5; i++) {
	const modifiedDate = new Date(currentDate);
    modifiedDate.setDate(currentDate.getDate() + i);

    db.HOTEL_ROOM_AVAILABILITIES.insertOne({
        "inventory_loaded": true,
        "pricing_loaded": true,
		"contract_id": 11111,
	    "rate_id": 1,
	    "hotel_id": 102,
	    "date": modifiedDate,
	    "room_type_code": "SJSB",
        "inventory_type": "NO_REAL",
        "quota_id": 22,
        "room_use": {
            "use_price_code": "2AD",
            "guest_distribution": {
                "adults": 2,
                "children": 0
            },
            "child_age_range": {
                "from": 2,
                "to": 12
            }
        },
        "board_prices": [
            {
                "code": "MP",
                "base_price_final_version": {
                    "adults_prices": [NumberDecimal("58"),NumberDecimal("33")],
                    "children_prices": [NumberDecimal("33"),NumberDecimal("45")],
                    "room_price": NumberDecimal("15"),
                    "total_price": NumberDecimal("187")
                },
                "base_price_initial_version": {
                    "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                    "children_prices": [NumberDecimal("40"),NumberDecimal("32")],
                    "room_price": NumberDecimal("45"),
                    "total_price": NumberDecimal("187")
                }
            },
            {
              "code": "AA",
              "base_price_final_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              },
              "base_price_initial_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              }
            },
            {
              "code": "HD",
              "base_price_final_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              },
              "base_price_initial_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              }
            }
        ],
        "available_rooms": 50,
        "unlimit_sale": false,
        "stop_sale": {
            "active": false,
            "reason": "NO_REASON"
        }
    });
}

// room type code DDSB - MP/HD/AI/PC/SH
for (let i = 0; i < 5; i++) {
	const modifiedDate = new Date(currentDate);
    modifiedDate.setDate(currentDate.getDate() + i);

    db.HOTEL_ROOM_AVAILABILITIES.insertOne({
        "inventory_loaded": true,
        "pricing_loaded": true,
		"contract_id": 11111,
	    "rate_id": 1,
	    "hotel_id": 102,
	    "date": modifiedDate,
	    "room_type_code": "DDSB",
        "inventory_type": "NO_REAL",
        "quota_id": 22,
        "room_use": {
            "use_price_code": "2AD",
            "guest_distribution": {
                "adults": 2,
                "children": 0
            },
            "child_age_range": {
                "from": 2,
                "to": 12
            }
        },
        "board_prices": [
            {
                "code": "MP",
                "base_price_final_version": {
                    "adults_prices": [NumberDecimal("58"),NumberDecimal("33")],
                    "children_prices": [NumberDecimal("33"),NumberDecimal("45")],
                    "room_price": NumberDecimal("15"),
                    "total_price": NumberDecimal("187")
                },
                "base_price_initial_version": {
                    "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                    "children_prices": [NumberDecimal("40"),NumberDecimal("32")],
                    "room_price": NumberDecimal("45"),
                    "total_price": NumberDecimal("187")
                }
            },
            {
              "code": "AA",
              "base_price_final_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              },
              "base_price_initial_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              }
            },
            {
              "code": "AI",
              "base_price_final_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              },
              "base_price_initial_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              }
            },
            {
              "code": "HD",
              "base_price_final_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              },
              "base_price_initial_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              }
            },
            {
              "code": "PC",
              "base_price_final_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              },
              "base_price_initial_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              }
            },
            {
              "code": "SH",
              "base_price_final_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              },
              "base_price_initial_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              }
            }
        ],
        "available_rooms": 50,
        "unlimit_sale": false,
        "stop_sale": {
            "active": false,
            "reason": "NO_REASON"
        }
    });
}

// room type code DGSB - MP/HD/AI
for (let i = 0; i < 5; i++) {
	const modifiedDate = new Date(currentDate);
    modifiedDate.setDate(currentDate.getDate() + i);

    db.HOTEL_ROOM_AVAILABILITIES.insertOne({
        "inventory_loaded": true,
        "pricing_loaded": true,
		"contract_id": 11111,
	    "rate_id": 1,
	    "hotel_id": 102,
	    "date": modifiedDate,
	    "room_type_code": "DGSB",
        "inventory_type": "NO_REAL",
        "quota_id": 22,
        "room_use": {
            "use_price_code": "2AD",
            "guest_distribution": {
                "adults": 2,
                "children": 0
            },
            "child_age_range": {
                "from": 2,
                "to": 12
            }
        },
        "board_prices": [
            {
                "code": "MP",
                "base_price_final_version": {
                    "adults_prices": [NumberDecimal("58"),NumberDecimal("33")],
                    "children_prices": [NumberDecimal("33"),NumberDecimal("45")],
                    "room_price": NumberDecimal("15"),
                    "total_price": NumberDecimal("187")
                },
                "base_price_initial_version": {
                    "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                    "children_prices": [NumberDecimal("40"),NumberDecimal("32")],
                    "room_price": NumberDecimal("45"),
                    "total_price": NumberDecimal("187")
                }
            },
            {
              "code": "AI",
              "base_price_final_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              },
              "base_price_initial_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              }
            },
            {
              "code": "HD",
              "base_price_final_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              },
              "base_price_initial_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              }
            }
        ],
        "available_rooms": 50,
        "unlimit_sale": false,
        "stop_sale": {
            "active": false,
            "reason": "NO_REASON"
        }
    });
}

//3AD+1NI
// room type code SJSB - MP/HD
for (let i = 0; i < 5; i++) {
	const modifiedDate = new Date(currentDate);
    modifiedDate.setDate(currentDate.getDate() + i);

    db.HOTEL_ROOM_AVAILABILITIES.insertOne({
        "inventory_loaded": true,
        "pricing_loaded": true,
		"contract_id": 11111,
	    "rate_id": 1,
	    "hotel_id": 102,
	    "date": modifiedDate,
	    "room_type_code": "SJSB",
        "inventory_type": "NO_REAL",
        "quota_id": 22,
        "room_use": {
            "use_price_code": "3AD+1NI",
            "guest_distribution": {
                "adults": 3,
                "children": 1
            },
            "child_age_range": {
                "from": 2,
                "to": 12
            }
        },
        "board_prices": [
            {
                "code": "MP",
                "base_price_final_version": {
                    "adults_prices": [NumberDecimal("58"),NumberDecimal("33")],
                    "children_prices": [NumberDecimal("33"),NumberDecimal("45")],
                    "room_price": NumberDecimal("15"),
                    "total_price": NumberDecimal("187")
                },
                "base_price_initial_version": {
                    "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                    "children_prices": [NumberDecimal("40"),NumberDecimal("32")],
                    "room_price": NumberDecimal("45"),
                    "total_price": NumberDecimal("187")
                }
            },
            {
              "code": "AA",
              "base_price_final_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              },
              "base_price_initial_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              }
            },
            {
              "code": "HD",
              "base_price_final_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              },
              "base_price_initial_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              }
            }
        ],
        "available_rooms": 50,
        "unlimit_sale": false,
        "stop_sale": {
            "active": false,
            "reason": "NO_REASON"
        }
    });
}

// room type code DDSB - MP/HD/AI/PC/SH
for (let i = 0; i < 5; i++) {
	const modifiedDate = new Date(currentDate);
    modifiedDate.setDate(currentDate.getDate() + i);

    db.HOTEL_ROOM_AVAILABILITIES.insertOne({
        "inventory_loaded": true,
        "pricing_loaded": true,
		"contract_id": 11111,
	    "rate_id": 1,
	    "hotel_id": 102,
	    "date": modifiedDate,
	    "room_type_code": "DDSB",
        "inventory_type": "NO_REAL",
        "quota_id": 22,
        "room_use": {
            "use_price_code": "3AD+1NI",
            "guest_distribution": {
                "adults": 3,
                "children": 1
            },
            "child_age_range": {
                "from": 2,
                "to": 12
            }
        },
        "board_prices": [
            {
                "code": "MP",
                "base_price_final_version": {
                    "adults_prices": [NumberDecimal("58"),NumberDecimal("33")],
                    "children_prices": [NumberDecimal("33"),NumberDecimal("45")],
                    "room_price": NumberDecimal("15"),
                    "total_price": NumberDecimal("187")
                },
                "base_price_initial_version": {
                    "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                    "children_prices": [NumberDecimal("40"),NumberDecimal("32")],
                    "room_price": NumberDecimal("45"),
                    "total_price": NumberDecimal("187")
                }
            },
            {
              "code": "AA",
              "base_price_final_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              },
              "base_price_initial_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              }
            },
            {
              "code": "AI",
              "base_price_final_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              },
              "base_price_initial_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              }
            },
            {
              "code": "HD",
              "base_price_final_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              },
              "base_price_initial_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              }
            },
            {
              "code": "PC",
              "base_price_final_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              },
              "base_price_initial_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              }
            },
            {
              "code": "SH",
              "base_price_final_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              },
              "base_price_initial_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              }
            }
        ],
        "available_rooms": 50,
        "unlimit_sale": false,
        "stop_sale": {
            "active": false,
            "reason": "NO_REASON"
        }
    });
}

// room type code DGSB - MP/HD/AI
for (let i = 0; i < 5; i++) {
	const modifiedDate = new Date(currentDate);
    modifiedDate.setDate(currentDate.getDate() + i);

    db.HOTEL_ROOM_AVAILABILITIES.insertOne({
        "inventory_loaded": true,
        "pricing_loaded": true,
		"contract_id": 11111,
	    "rate_id": 1,
	    "hotel_id": 102,
	    "date": modifiedDate,
	    "room_type_code": "DGSB",
        "inventory_type": "NO_REAL",
        "quota_id": 22,
        "room_use": {
            "use_price_code": "3AD+1NI",
            "guest_distribution": {
                "adults": 3,
                "children": 1
            },
            "child_age_range": {
                "from": 2,
                "to": 12
            }
        },
        "board_prices": [
            {
                "code": "MP",
                "base_price_final_version": {
                    "adults_prices": [NumberDecimal("58"),NumberDecimal("33")],
                    "children_prices": [NumberDecimal("33"),NumberDecimal("45")],
                    "room_price": NumberDecimal("15"),
                    "total_price": NumberDecimal("187")
                },
                "base_price_initial_version": {
                    "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                    "children_prices": [NumberDecimal("40"),NumberDecimal("32")],
                    "room_price": NumberDecimal("45"),
                    "total_price": NumberDecimal("187")
                }
            },
            {
              "code": "AI",
              "base_price_final_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              },
              "base_price_initial_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              }
            },
            {
              "code": "HD",
              "base_price_final_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              },
              "base_price_initial_version": {
                "adults_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "children_prices": [NumberDecimal("70"),NumberDecimal("45")],
                "room_price": NumberDecimal("180"),
                "total_price": NumberDecimal("180")
              }
            }
        ],
        "available_rooms": 50,
        "unlimit_sale": false,
        "stop_sale": {
            "active": false,
            "reason": "NO_REASON"
        }
    });
}