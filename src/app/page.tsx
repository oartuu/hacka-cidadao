import * as React from "react";


import {
  Card,
  CardContent,
 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";





export default function CardWithForm() {
  return (
    <div className="h-dvh max-w-dvw bg-zinc-900 flex justify-center">
      <div className=" max-h-full w-full lg:max-w-[1000px] bg-zinc-700">
        <div className="w-full h-full max-h-full p-4 flex flex-col justify-between items-center">
          <div className="flex-1 max-h-full overflow-y-hidden ">
            <ScrollArea className="h-full">
              <div className=" h-full max-h-full flex flex-col items-start justify-between space-y-4 p-4 ">
                <div className="bg-zinc-800 p-5 rounded-2xl">
                 
                </div>
              </div>

              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </div>

          <div className="p-2 w-full">
            <Card className=" w-full md:w-[750px]  bg-zinc-900">
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Input
                        id="prompt"
                        name="prompt"
                        placeholder="Como podemos te ajudar?"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Modelo:</Label>
                      <Select>
                        <SelectTrigger id="modelo">
                          <SelectValue placeholder="teste 1" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="next">teste 1</SelectItem>
                          <SelectItem value="sveltekit">teste 2</SelectItem>
                          <SelectItem value="astro">teste 3</SelectItem>
                          <SelectItem value="nuxt">teste 4</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
