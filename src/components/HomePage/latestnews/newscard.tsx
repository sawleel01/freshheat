import { Card, CardContent } from "@/components/ui/card";
import { User, Tag, ArrowRight } from "lucide-react";

export default function NewsCard({ item }: { item: any }) {
  return (
    <Card className="w-[320px] h-[400px] overflow-hidden shadow-md rounded-2xl">
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover"
      />

      <CardContent className="py-4">
        {/* Date + Meta */}
        <div className="flex items-start gap-4">
          {/* Date Block */}
          <div className="bg-red-600 text-white text-center px-3 py-1 rounded-md font-bold text-sm">
            <div className="text-xl leading-5">{item.dateDay}</div>
            <div className="text-xs">{item.dateMonth}</div>
          </div>

          {/* Meta Info */}
          <div className="space-y-1 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{item.postedBy}</span>
            </div>
            <div className="flex items-center gap-1">
              <Tag className="w-4 h-4" />
              <span>{item.category}</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-lg font-semibold leading-snug text-gray-900">
          {item.title}
        </h3>

        {/* Read more */}
        <a
          href="#"
          className="inline-flex items-center text-sm text-red-600 font-medium mt-2 hover:underline"
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </CardContent>
    </Card>
  );
}
