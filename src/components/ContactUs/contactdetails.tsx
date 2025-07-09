import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const details = [
  {
    icons: MapPin,
    title: "Our Address",
    description: "4517 Washington Ave. Manchester, Kentucky 39495",
  },
  {
    icons: Mail,
    title: "info@example.com",
    description: "Email us anytime for any kind of query.",
  },
  {
    icons: Phone,
    title: "Hot : +12348795",
    description: "24/7/365 priority Live Chat and Ticketing support.",
  },
  {
    icons: Clock,
    title: "Opening Hour",
    description: "Sun-Fri: 9am - 6pm  Sat: 9am - 4pm",
  },
];

export default function ContactDetails() {
  return (
    <div className="min-w-screen mt-5 mb-20">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-4 gap-8">
          {details.map((item, index) => {
            const Icon = item.icons;
            return (
              <Card
                key={index}
                className="text-center shadow-lg border-red-300"
              >
                <CardHeader>
                  <div className="w-20 h-20 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-red-500" />
                  </div>
                  <CardTitle className="font-bold text-2xl">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 whitespace-pre-line">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}

          {/* <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-content mx-auto mb-4">
                <Phone className="w-8 h-8 text-red-500" />
              </div>
              <CardTitle>Hot: +208-666-01112</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                24/7/365 priority Live Chat and ticketing support.
              </p>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  );
}
