var data = JSON.stringify({
    "personalizations": [
      {
        "to": [
          {
            "email": "john_doe@example.com",
            "name": "John Doe"
          },
          {
            "email": "julia_doe@example.com",
            "name": "Julia Doe"
          }
        ],
        "cc": [
          {
            "email": "jane_doe@example.com",
            "name": "Jane Doe"
          }
        ],
        "bcc": [
          {
            "email": "james_doe@example.com",
            "name": "Jim Doe"
          }
        ]
      },
      {
        "from": {
          "email": "sales@example.com",
          "name": "Example Sales Team"
        },
        "to": [
          {
            "email": "janice_doe@example.com",
            "name": "Janice Doe"
          }
        ],
        "bcc": [
          {
            "email": "jordan_doe@example.com",
            "name": "Jordan Doe"
          }
        ]
      }
    ],
    "from": {
      "email": "orders@example.com",
      "name": "Example Order Confirmation"
    },
    "reply_to": {
      "email": "customer_service@example.com",
      "name": "Example Customer Service Team"
    },
    "subject": "Your Example Order Confirmation",
    "content": [
      {
        "type": "text/html",
        "value": "<p>Hello from Twilio SendGrid!</p><p>Sending with the email service trusted by developers and marketers for <strong>time-savings</strong>, <strong>scalability</strong>, and <strong>delivery expertise</strong>.</p><p>%open-track%</p>"
      }
    ],
    "attachments": [
      {
        "content": "PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCiAgICA8aGVhZD4KICAgICAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db21wYXRpYmxlIiBjb250ZW50PSJJRT1lZGdlIj4KICAgICAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KCiAgICA8L2JvZHk+Cgo8L2h0bWw+Cg==",
        "filename": "index.html",
        "type": "text/html",
        "disposition": "attachment"
      }
    ],
    "categories": [
      "cake",
      "pie",
      "baking"
    ],
    "send_at": 1617260400,
    "batch_id": "AsdFgHjklQweRTYuIopzXcVBNm0aSDfGHjklmZcVbNMqWert1znmOP2asDFjkl",
    "asm": {
      "group_id": 12345,
      "groups_to_display": [
        12345
      ]
    },
    "ip_pool_name": "transactional email",
    "mail_settings": {
      "bypass_list_management": {
        "enable": false
      },
      "footer": {
        "enable": false
      },
      "sandbox_mode": {
        "enable": false
      }
    },
    "tracking_settings": {
      "click_tracking": {
        "enable": true,
        "enable_text": false
      },
      "open_tracking": {
        "enable": true,
        "substitution_tag": "%open-track%"
      },
      "subscription_tracking": {
        "enable": false
      }
    }
  });
  
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("POST", "https://api.sendgrid.com/v3/mail/send");
  xhr.setRequestHeader("authorization", "Bearer <<YOUR_SENDGRID_API_KEY_HERE>>");
  xhr.setRequestHeader("content-type", "application/json");
  
  xhr.send(data);