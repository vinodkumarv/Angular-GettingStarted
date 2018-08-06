import { PipeTransform, Pipe } from "@angular/core";

@Pipe({

    name: 'converToSpaces'
}
)

export class ConvertToSpacesPipe implements PipeTransform {
    transform(value: string, characterToReplace: string): string {
        return value.replace(characterToReplace, ' ');
    }

}